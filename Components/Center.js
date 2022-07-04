import { ChevronDownIcon } from "@heroicons/react/outline";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
const colors = [
  "from-indigo-500",
  "from-blue-500",
  "from-green-500",
  "from-yellow-500",
  "from-purple-500",
  "from-pink-500",
];
function Center() {
  const { data: session } = useSession();
  var dataImg = session?.user.image;
  console.log(typeof dataImg);
  if (typeof dataImg === "string") {
    // return dataImg
    var dataImg = session?.user.image;
  } else {
    var dataImg =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkM-C_Kg3MxSycfzTGXrcxsLKA311g9Sd5YQ&usqp=CAU";
  }
  const colorIndex = Math.floor(Math.random() * colors.length);

  const [color, setColor] = useState(colors[0]);

  //to change the color of the head
  useEffect(() => {
    setColor(colors[colorIndex]);
  }, []);

  console.log(dataImg);
  return (
    <div className=" flex-grow  text-white">
      <header className="absolute top-5 right-8">
        <div className="flex items-center bg-black space-x-3 opacity-90 hover:opacity-80 cursor-pointer rounded-full p-1 pr-2">
          <img
            className="rounded-full w-10 h-10"
            src={dataImg}
            alt=""
            srcset=""
          />/
          <h2> {session?.user.name}</h2>
          <ChevronDownIcon className="h-5 w-5 " />
        </div>
      </header>

      <section
        className={`flex items-end space-x-7 bg-gradient-to-b to-black ${color} h-80 text-white padding-8`}
      >
        <h1>hellow</h1>
      </section>
    </div>
  );
}

export default Center;
