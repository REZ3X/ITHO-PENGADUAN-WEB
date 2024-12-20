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
        <div className="container mx-auto p-6 backdrop-blur-gedhe w-[540px] rounded-9xl">
            <div className="space-y-4">
                <FormPengaduan isExpanded={expandedForm === 'pengaduan'} toggleExpand={() => toggleExpand('pengaduan')} />
                <FormAspirasi isExpanded={expandedForm === 'aspirasi'} toggleExpand={() => toggleExpand('aspirasi')} />
                <FormInformasi isExpanded={expandedForm === 'informasi'} toggleExpand={() => toggleExpand('informasi')} />
            </div>
        </div>
    );
}