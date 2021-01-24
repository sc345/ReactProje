import React from "react"

const SelectInput=({
    name,
    label,
    onChange,
    defaultOptions,
    value,
    error,
    options
})=>{

return(
    <div className="form-group">
        <label htmlFom={name}>{label}</label>
        <select name={name} value={value} onChange={onChange} className="form-control">
            <option value="">
                {defaultOptions}
            </option>
            {options.map(option=>{
                return(
                    <option key={option.value} value={option.value}>{option.text}</option>
                )
            })}
        </select>
        {error&&<div className="alert alert-danger">{error}</div> }
    </div>
)

};

export default SelectInput;

