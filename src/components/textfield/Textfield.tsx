import React from "react";

interface TextfieldProps {

    /**
     * Placeholder for the textfield
     */
    placeholder?: string;

}

export const Textfield = ({
                              placeholder = 'Placeholder...',
                          }: TextfieldProps) => {

    return <input placeholder={placeholder} type={'text'}/>;
}
