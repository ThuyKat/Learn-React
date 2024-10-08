


export default function CommonInput({label,name,id,placeholder,value,onChange,type}){
    return (
        <div>
            <label for={name}>{label}         </label>
            <input name={name}
             id={id}
            placeholder={placeholder || 'Enter value here'}
            value={value}
            onChange={onChange} 
            type={type || 'text'}
            />
        </div>
    )
}