import { React, useState } from 'react';
import FormRetail from './FormRetail';
import { connect } from 'react-redux';
import { newRetail } from './thunks';

function ManageRetailForm ({ onCreateRetail })  {
    const [retail, setRetail] = useState({
        cnpj: '',
        razao_social: '',
        nome_fantasia: '',
        telefone: '',
        segmento: '',
        emailVarejo: '',
        senha: '',
    });

    function handleChange ({ target }) {
        setRetail({
            ...retail,
            [ target.id ]: target.value,
        })
    }

    function handleSubmit (event) {
        onCreateRetail(retail);
    }

    return (
    <>
        <FormRetail retail={retail} 
                    onChange={handleChange}
                    onSubmit={handleSubmit}
        />
    </>
    )
}

const mapDispatchToProps = dispatch => ({
    onCreateRetail: retail => dispatch(newRetail(retail))
})

export default connect(null, mapDispatchToProps)(ManageRetailForm);