import Image from "next/image";
import registerImage from "../../assets/loginImage.jpg";

const RegistrationPage = () => {
  return (
    <div>
      <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 w-full max-w-screen-lg rounded-xl overflow-hidden shadow-xl">
          <div className="relative">
            <Image
              src={registerImage}
              alt="Login"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-35"></div>
          </div>

          <div></div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
