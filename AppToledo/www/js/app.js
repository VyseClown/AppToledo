var app = angular.module('app', []);
app.factory('studentSession', function ($http) {
    let factory = {};
    factory.getSessions = () => $http.get('http://localhost:60451/api/Produtos/listar', {});
    return factory;
})
    .controller('IndexController', ['$scope', '$http', 'studentSession', ($scope, $http, studentSessionFactory) => {
        $scope.produtos = [];
        init();
        function init() {
            studentSessionFactory.getSessions().then((data, status) => $scope.produtos = data.data);
        }
        $scope.mostrarProduto = (pid) => {
            instance.open();
            $scope.produto = $scope.produtos
                .filter(p => p.Id === pid)
                .pop();
            document.getElementById('preco').focus();
        };
    }]);

let elem = document.querySelector('.modal');
let instance = M.Modal.init(elem);


let produtos = [
    {
        id: 1,
        nome: 'Feijão Carioquinha',
        preco: 0,
    },
    {
        id: 2,
        nome: 'Arroz',
        preco: 0,
    },
    {
        id: 3,
        nome: 'Açucar',
        preco: 0,
    },
    {
        id: 4,
        nome: 'Farinha de trigo',
        preco: 0,
    },
    {
        id: 5,
        nome: 'Papel higiênico',
        preco: 0,
    },
    {
        id: 6,
        nome: 'Cerveja Lata',
        preco: 0,
    },
    {
        id: 7,
        nome: 'Acem Com osso',
        preco: 0,
    },
    {
        id: 8,
        nome: 'Acem sem osso',
        preco: 0,
    },
    {
        id: 9,
        nome: 'Frango Congelado',
        preco: 0,
    },
    {
        id: 10,
        nome: 'Alho',
        preco: 0,
    },
];
