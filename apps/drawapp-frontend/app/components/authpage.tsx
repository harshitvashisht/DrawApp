import Button from "./button";
import Heading from "./heading";
import Input from "./input";

export default function AuthPage(){

       return <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
           <div>
            <h1 className="text-2xl flex justify-center text-white test-bold">
                <Heading label="SignIn"/>
            </h1> <div className="mt-2">
            <Input label="Email address " Placeholder="someone@gmail.com"/></div>
            <div className="mt-2">
            <Input label="Password " Placeholder="**********" />
            </div>
           </div>
           <div className="mt-4 flex item-center ">
          <Button label="SignIn"/>
          </div>
       </div>
}