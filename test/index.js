const log = require('./../index');

var chai = require('chai'),
    expect = chai.expect,
    sinonChai = require('sinon-chai'),
    sinon = require('sinon');

chai.use(sinonChai);
const MENSAJE = 'Hola, estamos en el curso de NPM!!';
describe('Test de las funciones', () => {
    beforeEach( function() {
        sinon.spy(console, 'log');
    });
    afterEach( function() {
        console.log.restore();
    });
    it('Función ok', () => {
        log.ok(MENSAJE);
        expect(console.log).to.be.called; //true si llama al console.log
    });
    it('Función info', () => {
        log.info(MENSAJE);
        expect(console.log).to.be.called;
    });
    it('Función aviso', () => {
        log.aviso(MENSAJE);
        expect(console.log).to.be.called;
    });
    it('Función error', () => {
        log.error(MENSAJE);
        expect(console.log).to.be.called;
    });

    xit('No llama al console log', () => { //xit hace que no se ejecute el test
        log.mensajeBienvenida();
        expect(console.log).to.not.be.called;
    });
});