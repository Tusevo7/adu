document.addEventListener('DOMContentLoaded', function() {
    // Simular dados do professor
    const teacherData = {
        name: "Ana Silva",
        department: "Fiscalização Aduaneira",
        classes: 4,
        students: 120
    };
    
    // Preencher informações do professor
    const teacherNameElements = document.querySelectorAll('#teacherName');
    teacherNameElements.forEach(el => {
        el.textContent = teacherData.name;
    });
    
    // Gerenciamento de Materiais
    const materialForm = document.getElementById('materialForm');
    if (materialForm) {
        materialForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simular envio do material
            const materialData = {
                title: document.getElementById('materialTitle').value,
                class: document.getElementById('materialClass').value,
                type: document.getElementById('materialType').value,
                description: document.getElementById('materialDescription').value,
                date: new Date().toLocaleDateString(),
                downloads: 0
            };
            
            // Adicionar à tabela (simulação)
            addMaterialToTable(materialData);
            
            // Limpar formulário
            materialForm.reset();
            
            // Mostrar mensagem de sucesso
            alert('Material enviado com sucesso!');
        });
    }
    
    function addMaterialToTable(material) {
        const tableBody = document.querySelector('.materials-table tbody');
        const row = document.createElement('tr');
        
        row.innerHTML = `
            <td>${material.date}</td>
            <td>${material.title}</td>
            <td>${material.class}</td>
            <td>${material.downloads}</td>
            <td>
                <button class="btn-action btn-view">
                    <i class="icon-eye"></i>
                </button>
                <button class="btn-action btn-edit">
                    <i class="icon-edit"></i>
                </button>
                <button class="btn-action btn-delete">
                    <i class="icon-trash"></i>
                </button>
            </td>
        `;
        
        tableBody.appendChild(row);
    }
    
    // Simular alguns materiais existentes
    const sampleMaterials = [
        {
            title: 'Aula 1 - Introdução à Legislação',
            class: 'Legislação Aduaneira - Turma A',
            type: 'aula',
            date: '15/05/2023',
            downloads: 24
        },
        {
            title: 'Exercícios - Técnicas de Fiscalização',
            class: 'Técnicas de Fiscalização - Turma B',
            type: 'exercicio',
            date: '10/05/2023',
            downloads: 32
        }
    ];
    
    sampleMaterials.forEach(material => addMaterialToTable(material));
    
    // Gerenciamento de Avaliações e Notas
    const saveGradesBtn = document.querySelector('.btn-save');
    if (saveGradesBtn) {
        saveGradesBtn.addEventListener('click', function() {
            // Coletar todas as notas
            const gradeInputs = document.querySelectorAll('.grades-table input[type="number"]');
            const grades = [];
            
            gradeInputs.forEach(input => {
                grades.push({
                    studentId: input.getAttribute('data-student-id'),
                    grade: input.value
                });
            });
            
            // Simular salvamento
            console.log('Notas a serem salvas:', grades);
            alert('Notas salvas com sucesso!');
            
            // Fechar modal
            document.getElementById('gradeModal').style.display = 'none';
        });
    }
    
    // Nova avaliação
    const newEvalBtn = document.querySelector('.btn-new-evaluation');
    if (newEvalBtn) {
        newEvalBtn.addEventListener('click', function() {
            // Simular criação de nova avaliação
            const evalName = prompt('Digite o nome da nova avaliação:');
            if (evalName) {
                alert(`Nova avaliação "${evalName}" criada com sucesso!`);
                // Atualizar a lista de avaliações
            }
        });
    }
    
    // Nova turma
    const newClassBtn = document.querySelector('.btn-new-class');
    if (newClassBtn) {
        newClassBtn.addEventListener('click', function() {
            // Simular criação de nova turma
            const className = prompt('Digite o nome da nova turma:');
            if (className) {
                alert(`Nova turma "${className}" criada com sucesso!`);
                // Atualizar a lista de turmas
            }
        });
    }
    
    // Remover materiais
    document.addEventListener('click', function(e) {
        if (e.target.closest('.btn-delete')) {
            if (confirm('Tem certeza que deseja excluir este material?')) {
                const row = e.target.closest('tr');
                row.remove();
                alert('Material excluído com sucesso!');
            }
        }
    });
});