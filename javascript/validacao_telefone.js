document.addEventListener('DOMContentLoaded', function () {
    const telefoneInput = document.getElementById('telefone');

    telefoneInput.addEventListener('focus', function () {
        if (this.value === '') {
            this.placeholder = '(__) _____-____';
        }
    });

    telefoneInput.addEventListener('blur', function () {
        this.placeholder = '';
    });

    telefoneInput.addEventListener('input', function () {
        let valor = this.value.replace(/\D/g, ''); // Remove tudo que não for número

        // Limita a 11 dígitos (ex: 11987654321)
        if (valor.length > 11) {
            valor = valor.slice(0, 11);
        }

        // Aplica a máscara: (XX) XXXXX-XXXX
        if (valor.length > 6) {
            valor = valor.replace(/^(\d{2})(\d{5})(\d{0,4})/, '($1) $2-$3');
        } else if (valor.length > 2) {
            valor = valor.replace(/^(\d{2})(\d{0,5})/, '($1) $2');
        } else {
            valor = valor.replace(/^(\d{0,2})/, '($1');
        }

        this.value = valor;
    });
});
