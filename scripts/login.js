const form = document.getElementById('formulario')
const btnBuscar = document.getElementById('correo')
const btnEditar = document.getElementById('editar')
const btnEliminar = document.getElementById('eliminar')

let url = 'http://localhost:4001/usuarios';


form.addEventListener('submit', async eve => {
    eve.preventDefault()

    let name = document.getElementById('dato1').value
    let email = document.getElementById('dato2').value
    let pass = document.getElementById('dato3').value
    let phone = document.getElementById('dato4').value
// Guarda los datos.
    await fetch(url, {
        method: 'POST',
        body: JSON.stringify({
            nombre: name,
            email: email,
            password: pass,
            phone: phone
        }),
        headers: {
            "content-type": "application/json; charset=UTF-8"
        }
    })

})

btnBuscar.addEventListener('click', async() => {
   
    let correo = document.getElementById('dato2').value 

    let res = await fetch(url)
    let data = await res.json()

    let modificar = data.find(user => user.email.toLocaleLowerCase().includes(correo.toLocaleLowerCase()))

    const { id, nombre, email, password, phone } = modificar
    console.log(id, nombre, email, password, phone)

    document.getElementById('dato1').value = nombre
    document.getElementById('dato2').value = email
    document.getElementById('dato3').value = password
    document.getElementById('dato4').value = phone
    document.getElementById('id').value = id 
})

btnEditar.addEventListener('click', async() => {

    let m_name = document.getElementById('dato1').value
    let m_email = document.getElementById('dato2').value
    let m_pass = document.getElementById('dato3').value
    let m_phone = document.getElementById('dato4').value
    let modificarId = document.getElementById('id').value 

    
// PUT modifica los datos.
    await fetch(url + modificarId, {
        method: 'PUT',
        body: JSON.stringify({
            id: modificarId,
            nombre: m_name,
            email: m_email,
            password: m_pass,
            phone: m_phone
        }),

        headers: {
            'Content-Type': 'applacation/json; charset=UTF-8'
        }
    })
    let data = res.json()
    console.log(data);
})

btnEliminar.addEventListener('click', async() => {
    let delete_id = document.getElementById('id').value

    await fetch(url + delete_id, {
        method:'DELETE'
    })
})




