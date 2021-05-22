import { React, useState } from 'react';
import FormRetail from './FormRetail';
import { connect } from 'react-redux';
import { newRetail } from './thunks';
import { useHistory } from 'react-router-dom';

function ManageRetailForm (props)  {
    const history = useHistory();
    const handleSubmit = (target) => {
        props.setToast(true) 
        props.setMessage('Varejo'+ retail.nome_fantasia +'Cadastrado!') 
        props.setStatus("success")
        props.onCreateRetail(retail);
        history.push("/home/retail" );
    }
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