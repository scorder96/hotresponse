function EmailVerify() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col justify-center shadow-2xl rounded-xl w-1/3 p-8">
        {/* <h1 className="text-2xl mb-4">Email Verification</h1> */}
        <h1 className="text-xl text-center font-medium">Verify your email</h1>
        {/* <span className="text-center text-sm font-light mt-2 mb-4">
          Please verify your email to continue.
        </span> */}
        <span className="mt-4 text-center">
          We sent you an email with a link. <br />
          If you can't find it, please check spam.
        </span>
        <span className="text-center text-sm font-light mt-4">
          You can close this tab
        </span>
        {/* <Link to={"/projects"}> */}
        {/* <button className="bg-lime-200 p-2 rounded mt-4">Continue</button> */}
        {/* <Button className="mt-4 w-full">Continue</Button> */}
        {/* </Link> */}
      </div>
    </div>
  );
}
export default EmailVerify;
