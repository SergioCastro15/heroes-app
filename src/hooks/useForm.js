import React, { useState } from 'react'

export const useForm = (initialValue = {}) => {
    const [state, setState] = useState(initialValue)

    const handleInputChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        });
    }

    return { 
        state,
        setState,
        handleInputChange
    }
}
