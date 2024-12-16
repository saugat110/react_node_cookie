
export const setcookie = (req, res) => {
  const {token} = req.body;
  res.cookie('token', token, {
    httpOnly: true,
    secure:true,
    sameSite:'None',
    maxAge:15 * 24 * 60 * 60 * 1000
  });

  res.status(200).json({
    status:'Ok',
    message:'Set Cookie Request Sent'
  });
}


export const getCookie = (req, res) => {
  const token = req.cookies.token;
  if(!token){
    res.status(500).json({status:'error', message:"Token not Found"});
  }
  res.status(200).json({cval:token});
}