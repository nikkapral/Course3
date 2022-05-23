import React, {useState} from 'react';

const ControlledInputs = () => {
    const [firstName, setFirstName] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (firstName) {
            console.log('firstName :>> ', firstName);
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="firstName">Name: </label>
                <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />
                <button type="submit">add person</button>
            </form>
        </>
    );
};


export default ControlledInputs;