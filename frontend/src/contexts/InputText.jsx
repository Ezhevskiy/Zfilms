export const InputText =({register, type, validation={ required: 'Имя обязательно' }, errors, name})=>{
    return  <div className="form-group">
        <label htmlFor="name">Имя:</label>
        <input
            type={type}
            id={name}
            {...register(name, validation)}
        />
        {errors[name] && <p className="error-text">{errors[name].message}</p>}
    </div>
}