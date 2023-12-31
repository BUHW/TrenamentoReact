import styles from "./Select.module.css";

function Select({text, name, options, handleOnChange, value }) {
    return (
        <section className={styles.form_control}>
            
            <label htmlFor={name}>{text}:</label>
            
            <select name={name} id={name} onChange={handleOnChange} value={value || ''}>
                
                <option>Selecione uma opcão</option>
                {options.map((option) => (
                    <option value={option.id} key={option.id}>
                        {option.name}
                    </option>
                ))}
            
            </select>
        </section>
    );
}

export default Select;
