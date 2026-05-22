const ActivityLog = require(
   "../models/ActivityLog"
);

const logActivity = async (
   userId,
   action,
   details
) => {

   try {

      await ActivityLog.create({
         userId,
         action,
         details
      });

   } catch(error){

      console.log(
         "Activity Log Error:",
         error.message
      );
   }
};

module.exports = logActivity;