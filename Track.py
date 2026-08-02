import uuid
import re
from abc import ABC, abstractmethod


# =====================================
# PACKET
# =====================================

class Packet:

    def __init__(
        self,
        data,
        packet_type="input",
        source=None,
        destination=None,
        metadata=None
    ):

        self.id = str(uuid.uuid4())

        self.packet_type = packet_type

        self.data = data

        self.source = source

        self.destination = destination

        self.metadata = metadata or {}

        self.history = []

    def add_history(self, module):

        self.history.append(module)

    def __repr__(self):

        return (
            f"Packet("
            f"id={self.id[:8]}, "
            f"type={self.packet_type}, "
            f"source={self.source}, "
            f"destination={self.destination})"
        )


# =====================================
# MODULE
# =====================================

class Module(ABC):

    def __init__(self, name):

        self.name = name

    @abstractmethod
    def process(self, packet, state):

        pass


# =====================================
# BRAIN STATE
# =====================================

class BrainState:

    def __init__(self):

        self.goal = None

        self.attention = []

        self.current_packet = None

        self.current_thought = None

        self.working_memory = []

        self.world_model = {}

        self.reasoning_path = []

        self.confidence = 0.0


# =====================================
# BRAIN CONNECTION BUS
# =====================================

class BrainConnectionBus:

    def __init__(self):

        self.modules = {}

    def register(self, module):

        self.modules[module.name] = module

    def send(self, packet, state):

        destination = packet.destination

        if destination not in self.modules:

            raise Exception(
                f"Module '{destination}' not registered."
            )

        packet.add_history(destination)

        state.current_packet = packet.id

        return self.modules[destination].process(
            packet,
            state
        )


# =====================================
# PIPELINE
# =====================================

class Pipeline:

    def __init__(self, bus):

        self.bus = bus

        self.steps = []

    def add(self, module_name):

        self.steps.append(module_name)

    def run(self, packet, state):

        for module_name in self.steps:

            packet.destination = module_name

            packet = self.bus.send(
                packet,
                state
            )

        return packet


# =====================================
# NORMALIZER
# =====================================

class Normalizer(Module):

    def __init__(self):

        super().__init__("normalizer")

    def process(self, packet, state):

        text = str(packet.data)

        text = text.lower()

        text = re.sub(
            r"[^\w\s]",
            "",
            text
        )

        text = re.sub(
            r"\s+",
            " ",
            text
        ).strip()

        new_packet = Packet(

            data=text,

            packet_type="normalized",

            source=self.name
        )

        new_packet.history = packet.history.copy()

        return new_packet


# =====================================
# ATTENTION
# =====================================

class Attention(Module):

    STOPWORDS = {

        "the",
        "a",
        "an",
        "is",
        "in",
        "of",
        "to",
        "and"
    }

    def __init__(self):

        super().__init__("attention")

    def process(self, packet, state):

        words = packet.data.split()

        focus = []

        for word in words:

            if word not in self.STOPWORDS:

                focus.append(word)

        state.attention = focus

        new_packet = Packet(

            data=focus,

            packet_type="attention",

            source=self.name
        )

        new_packet.history = packet.history.copy()

        return new_packet


# =====================================
# SIMPLE TEST
# =====================================

bus = BrainConnectionBus()

state = BrainState()

bus.register(Normalizer())

bus.register(Attention())

pipeline = Pipeline(bus)

pipeline.add("normalizer")

pipeline.add("attention")

packet = Packet("John owns a brown dog.")

result = pipeline.run(packet, state)

print(result.data)
print(state.attention)