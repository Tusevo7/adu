document.addEventListener('DOMContentLoaded', function() {
    // Simular dados do aluno
    const studentData = {
        name: "Tusevo Manuel",
        registration: "PF202300123",
        course: "Formação em Fiscalização Aduaneira",
        semester: "2023.1",
        average: 15.2,
        attendance: 92
    };
    
    // Preencher informações do aluno
    const studentNameElements = document.querySelectorAll('#studentName');
    studentNameElements.forEach(el => {
        el.textContent = studentData.name;
    });
    
    // Download de materiais
    document.addEventListener('click', function(e) {
        if (e.target.closest('.btn-download')) {
            const materialCard = e.target.closest('.material-card');
            const materialTitle = materialCard.querySelector('h4').textContent;
            alert(`Iniciando download do material: ${materialTitle}`);
            // Na implementação real, seria um link para o arquivo
        }
        
        if (e.target.closest('.btn-preview')) {
            const materialCard = e.target.closest('.material-card');
            const materialTitle = materialCard.querySelector('h4').textContent;
            alert(`Visualizando material: ${materialTitle}`);
            // Na implementação real, abriria um visualizador ou nova aba
        }
    });
    
    // Filtros de materiais
    const filterClass = document.getElementById('filterClass');
    const filterType = document.getElementById('filterType');
    
    if (filterClass && filterType) {
        [filterClass, filterType].forEach(filter => {
            filter.addEventListener('change', function() {
                // Simulação de filtro - na prática seria uma chamada AJAX ou filtro no front
                console.log('Filtrando por:', {
                    class: filterClass.value,
                    type: filterType.value
                });
            });
        });
    }
    
    // Paginação
    const prevBtn = document.querySelector('.btn-prev');
    const nextBtn = document.querySelector('.btn-next');
    const pageNumbers = document.querySelectorAll('.page-numbers span');
    
    if (prevBtn && nextBtn && pageNumbers) {
        let currentPage = 1;
        
        prevBtn.addEventListener('click', function() {
            if (currentPage > 1) {
                currentPage--;
                updatePagination();
            }
        });
        
        nextBtn.addEventListener('click', function() {
            if (currentPage < 3) { // Simulação - 3 páginas
                currentPage++;
                updatePagination();
            }
        });
        
        pageNumbers.forEach((number, index) => {
            number.addEventListener('click', function() {
                currentPage = index + 1;
                updatePagination();
            });
        });
        
        function updatePagination() {
            // Atualizar estado dos botões
            prevBtn.disabled = currentPage === 1;
            nextBtn.disabled = currentPage === 3;
            
            // Atualizar números da página
            pageNumbers.forEach((number, index) => {
                number.classList.toggle('active', index + 1 === currentPage);
            });
            
            // Simular carregamento de dados da página
            console.log(`Carregando página ${currentPage}`);
        }
    }
});