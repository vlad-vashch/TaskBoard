import { Label } from '@/components/ui/label.tsx';
import { Input } from '@/components/ui/input.tsx';

export const CInput = ({ label, error, ...props }) => {
    return (
        <div className="c-input">
            { label && <Label className="c-input__label">{ label }</Label>}
            <Input { ...props } />
            <div className="c-input__error">{ error }</div>
        </div>
    );
};