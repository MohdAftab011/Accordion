import Accordion from "./Accordion";

function FAQ() {
    return (
        <div className="p-4 bg-gray-50 rounded-md">
            <Accordion Heading=' Section-2' Info='Info about section-2'/>
            <Accordion Heading=' Section-3' Info='Info about section-3'/>
            <Accordion Heading=' Section-4' Info='Info about section-4'/>
        </div>
        
    );
}

export default FAQ;