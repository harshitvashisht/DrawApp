//@ts-ignore
export default function AnimatedCursor({ color, position, delay, name }){

    
   return <div className="absolute group" style={position}>
      <div
        className="w-4 h-4 rounded-full animate-ping shadow-lg"
        style={{
          backgroundColor: color,
          animationDelay: `${delay}s`,
          animationDuration: '3s',
        }}
      />
      <div className="absolute -top-8 left-6 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        {name}
      </div>
    </div>


}