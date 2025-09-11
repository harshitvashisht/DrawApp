
interface InputProps{
    label : string, 
     Placeholder : string
}

export default function Input ({label , Placeholder} : InputProps){
    return <div>
        <div className="text-white">
        {label}
        </div>
        <input  className="mt-2 text-white py-2.5 sm:py-3 px-5 block w-full border-gray-200 rounded-full sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none " type="text" placeholder={Placeholder} />
    </div>
}