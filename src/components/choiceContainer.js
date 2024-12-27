import { useState } from 'react';
import FormPengaduan from './formPengaduan';
import FormAspirasi from './formAspirasi';
import FormInformasi from './formInformasi';

export default function ChoiceContainer() {
    const [expandedForm, setExpandedForm] = useState(null);

    const toggleExpand = (form) => {
        setExpandedForm(expandedForm === form ? null : form);
    };

    return (
        <div className="container flex justify-center items-center w-3/4">
            <div className="space-y-4 p-4 flex flex-row backdrop-blur-gedhe rounded-9xl w-full">
                <FormPengaduan isExpanded={expandedForm === 'pengaduan'} toggleExpand={() => toggleExpand('pengaduan')} />
                <FormAspirasi isExpanded={expandedForm === 'aspirasi'} toggleExpand={() => toggleExpand('aspirasi')} />
                <FormInformasi isExpanded={expandedForm === 'informasi'} toggleExpand={() => toggleExpand('informasi')} />
            </div>
        </div>
    );
}