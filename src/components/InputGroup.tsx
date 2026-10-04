import { ReactNode } from "react";

type InputGroupProps = {
    iconPath: ReactNode;
    type: "email" | "password";
    placeholder: string;
    autoComplete: string;
    value: string;
    onChange: (value: string) => void;
}

export default function InputGroup({
    iconPath,
    type,
    placeholder,
    autoComplete,
    value,
    onChange
}: InputGroupProps) {
  return (
    <div className="mb-[23px] flex h-[58px] items-center rounded-[35px] border  border-[#d0d0d0] px-5 transition duration-300 focus-within:border-login focus-within:shadow-[0_0_0_3px_rgba(8,123,232,0.08)] xs:h-16 xs:px-[25px]">
        <span className="mr-3 flex h-[25px] w-[25px] items-center justify-center">
            {iconPath}
        </span>
        <input className="w-full border-none text-base text-ink outline-none placeholder:text-[#b8b8b8]"
            type={type}
            placeholder={placeholder}
            autoComplete={autoComplete}
            value={value}
            onChange={(event) => onChange(event.target.value)}
        />
    </div>
  )
}
