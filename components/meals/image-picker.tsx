"use client";

import { useRef, useState } from "react";
import Image from "next/image";

export default function ImagePicker({
  label,
  name,
}: {
  label: string;
  name: string;
}) {
  const [pickedImage, setPickedImage] = useState<string | null>();
  const imageInputRef = useRef<HTMLInputElement>(null);

  function handlePickClick() {
    imageInputRef.current?.click();
  }

  function handleImageChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) {
      setPickedImage(null);
      return;
    }
    const fileReader = new FileReader();
    fileReader.onload = () => {
      console.log(fileReader.result);
      setPickedImage(fileReader.result as string);
    };
    fileReader.readAsDataURL(file);
  }
  return (
    <div className="picker">
      <label htmlFor={name}>{label}</label>
      <div className="flex items-start gap-[1.5rem] mb-[1rem]">
        <div className="w-[10rem] h-[10rem] border-solid border-[2px] border-[#a4abb9] flex justify-center items-center text-center text-[#a4abb9] relative m-[5px] rounded-[8px]">
          {!pickedImage && <p className="m-0 p-[1rem]">No Image picked yet</p>}
          {pickedImage && (
            <Image
              className="object-cover rounded-[8px]"
              src={pickedImage as string}
              fill
              alt="The image selected by the user"
            />
          )}
        </div>
        <input
          className="hidden"
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          ref={imageInputRef}
          onChange={handleImageChange}
          required
        />
        <button
          className="b-0 py-[0.5rem] px-[1.5rem] bg-[#a4abb9] rounded-[2px] cursor-pointer font-sans m-3 text-[#ffffff] hover:bg-[#f9572a] hover:text-[#ffffff] transition-all duration-0.3s ease-in-out"
          type="button"
          onClick={handlePickClick}
        >
          Pick an Image
        </button>
      </div>
    </div>
  );
}
