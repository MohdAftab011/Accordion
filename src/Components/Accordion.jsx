import { useState } from "react";

function Accordion({Heading,Info}) {
    const [accordionOpen,setAccordionOpen] = useState(false);
    return (
        <div className="py-2">
            <button onClick={()=> setAccordionOpen(!accordionOpen)} className="flex justify-between w-full">
                <span>{Heading}</span>
                {accordionOpen ? <span>-</span> : <span>+</span> }
            </button>
            <div className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm 
                ${accordionOpen ? 'grid-rows-[1fr] opacity-100' : ' grid-rows-[0fr] opacity-0'}`}>
                <div className="overflow-hidden">{Info}</div>
            </div>
        </div>
    );
}

export default Accordion;