import { Jobs } from "../Jobs/jobs.js";

export const getJobs = async (req, res) => {
 try {
    const jobs = Jobs.findOne();

   return res.status(400).json({
     success: true,
     message: "jobs found include: ",
     Jobs
   });
 } catch (error) {
   return res.status(500).json({
     success: false,
     message: error.message
   });
 }
}
exports.createJob = async (req, res) => {
  const {title, description} = req.body;
  try {
    const newjob = Jobs.create({
      title: title,
      description: description
    });
    return newjob;
  } catch (error) {
    return res.status(409).json({
      success: false,
      message: error.message
    });
  }
}
