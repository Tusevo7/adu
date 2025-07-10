document.addEventListener('DOMContentLoaded', function() {
    // Carregar gestão de usuários (simulação)
    const usuariosSection = document.getElementById('usuarios');
    if (usuariosSection) {
        usuariosSection.innerHTML = `
            <div class="admin-tools">
                <button class="btn btn-primary">Adicionar Novo Usuário</button>
                <div class="search-box">
                    <input type="text" placeholder="Pesquisar usuários...">
                    <button><i class="icon-search"></i></button>
                </div>
            </div>
            
            <div class="table-responsive">
                <table class="users-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Email</th>
                            <th>Tipo</th>
                            <th>Status</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>PF2023001</td>
                            <td>Carlos Mendes</td>
                            <td>carlos.mendes@pf.gov</td>
                            <td>Aluno</td>
                            <td><span class="badge bg-success">Ativo</span></td>
                            <td>
                                <button class="btn btn-sm btn-edit"><i class="icon-edit"></i></button>
                                <button class="btn btn-sm btn-delete"><i class="icon-delete"></i></button>
                            </td>
                        </tr>
                        <tr>
                            <td>PF2023002</td>
                            <td>Ana Silva</td>
                            <td>ana.silva@pf.gov</td>
                            <td>Professor</td>
                            <td><span class="badge bg-success">Ativo</span></td>
                            <td>
                                <button class="btn btn-sm btn-edit"><i class="icon-edit"></i></button>
                                <button class="btn btn-sm btn-delete"><i class="icon-delete"></i></button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            
            <div class="pagination">
                <button class="btn btn-prev">Anterior</button>
                <span>Página 1 de 5</span>
                <button class="btn btn-next">Próxima</button>
            </div>
        `;
    }
    
    // Outras funcionalidades específicas do admin podem ser adicionadas aqui
});