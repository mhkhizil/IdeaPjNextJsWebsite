import { cn } from "@/utils";
import {motion} from "framer-motion";
import Image from "next/image";

export interface ItemProps {
    img: string;
    top: string;
    left: string;
    dimension: string;
}

const Item: React.FC<ItemProps> = ({img,top, left, dimension}) => {
  return (
    <div className=" absolute scale-[0.9]" style={{
        top,
        left,
        opacity: 0
    }}>
      <motion.div className={cn(
        "relative flex justify-start col-span-2",
        dimension
    )}>
        <Image fill src={img} alt="" />
      </motion.div>
    </div>
  );
};

export default Item;
