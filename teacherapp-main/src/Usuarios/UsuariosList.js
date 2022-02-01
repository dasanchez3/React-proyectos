
function UsuarioList(props){
return(
    <table>
    <thead >
      <tr>
        <th >Id</th>
        <th>Username</th>
        <th>Password</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
    
        {props.children}
    
        </tbody>
  </table>
);
}

export default UsuarioList