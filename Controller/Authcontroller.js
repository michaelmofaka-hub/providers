import User from "../Model/User.js";

export const signin = async (req, res) => {
    try {
        const { firstName, lastName, Username, email, password } = req.body;

        // Check required fields
        if (!firstName || !lastName || !Username || !email || !password) {
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            });
        }

        // Check if user exists
        const existingUser = await User.findOne({
            $or: [{ email }, { Username }]
        });

        if (existingUser) {
            return res.status(409).json({
                success: false,
                message: "User already exists"
            });
        }

        // Hash password
        //const hashedPassword = await bcrypt.hash(password, 10);

        // Create user
        const user = await User.create({
            firstName,
            lastName,
            Username,
            email,
            password: password
        });

        res.status(201).json({
            success: true,
            message: "Account created successfully",
            user: {
                id: User._id,
                firstName: User.firstName,
                lastName: User.lastName,
                username: User.Username,
                email: User.email
            }
        });
    }
    catch(error){
      console.error(error);
      return res.status(500).json({
        success: false ,
        message: error.message
      });
    }
}
  
export const login = async (req, res) => {
    try{
        const {username, password} = req.body;
        if (!username | !password){
            return res.status(201).json({
              success: false,
              message: "please input all the details"
          });
        }
        const checkUser =  User.findOne();
        if (checkUser) {
            return res.status(400).json({
              success: true,
              message: "loged in successfully"
          });
        }
      }
    catch(error){
      return res.status(500).json({
        success: false ,
        message: "server error"
      });
    }
}