import {
    reducerDestinosViajes,
    DestinosViajesState,
    intializeDestinosViajesState,
    InitMyDataAction,
    NuevoDestinoAction,
    ElegidoFavoritoAction,
    VoteUpAction,
    VoteDownAction
} from './destinos-viajes-state.models';
import { DestinoViaje } from './destino-viaje.model';

describe('reducerDestinosViajes', () => {
    it('should reduce init data', () => {
        // Setup configurar
        const prevState: DestinosViajesState =intializeDestinosViajesState();
        const action: InitMyDataAction = new InitMyDataAction(['destino 1', 'destino 2']);
        // Action
        const newState: DestinosViajesState = reducerDestinosViajes(prevState, action);
        // assertions
        expect(newState.items.length).toEqual(2);
        expect(newState.items[0].nombre).toEqual('destino 1');

    });

    it('should reduce new item added', () => {
        const prevState: DestinosViajesState = intializeDestinosViajesState();
        const action: NuevoDestinoAction = new NuevoDestinoAction(new DestinoViaje('barcelona', 'url'));
        const newState: DestinosViajesState = reducerDestinosViajes(prevState, action);
        expect(newState.items.length).toEqual(1);
        expect(newState.items[0].nombre).toEqual('barcelona');
    });

    it('should reduce new favorite, oteUp', () => {
        let prevState: DestinosViajesState = intializeDestinosViajesState();
        let action: NuevoDestinoAction = new NuevoDestinoAction(new DestinoViaje('barcelona', 'url'));
        let newState: DestinosViajesState = reducerDestinosViajes(prevState, action);
        prevState = newState;
        action = new NuevoDestinoAction(new DestinoViaje('Medellin', 'url'));
        newState = reducerDestinosViajes(prevState, action);
        prevState = newState;
        const action2: ElegidoFavoritoAction = new ElegidoFavoritoAction(prevState.items[0]);
        newState = reducerDestinosViajes(prevState, action2);

        expect(newState.items.length).toEqual(2);
        expect(newState.items[0].nombre).toEqual('barcelona');
        expect(newState.items[0].isSelected()).toEqual(true);
    
        prevState = newState;
        let action3: VoteUpAction = new VoteUpAction(prevState.items[1]);
        newState = reducerDestinosViajes(prevState, action3);
        expect(newState.items[1].votes).toEqual(1);
    
        prevState = newState;
        action3 = new VoteUpAction(prevState.items[1]);
        newState = reducerDestinosViajes(prevState, action3);
        expect(newState.items[1].votes).toEqual(2);

        prevState = newState;
        action3 = new VoteDownAction(prevState.items[0]);
        newState = reducerDestinosViajes(prevState, action3);
        expect(newState.items[0].votes).toEqual(-1);
    
    });

    it('should reduce VoteUp, VoteDown', () => {
        let prevState: DestinosViajesState = intializeDestinosViajesState();
        let action: NuevoDestinoAction = new NuevoDestinoAction(new DestinoViaje('barcelona', 'url'));
        let newState: DestinosViajesState = reducerDestinosViajes(prevState, action);
        prevState = newState;
        action = new NuevoDestinoAction(new DestinoViaje('Medellin', 'url'));
        newState = reducerDestinosViajes(prevState, action);

        prevState = newState;
        let action3: VoteUpAction = new VoteUpAction(prevState.items[1]);
        newState = reducerDestinosViajes(prevState, action3);
        expect(newState.items[1].votes).toEqual(1);

        prevState = newState;
        action3 = new VoteUpAction(prevState.items[1]);
        newState = reducerDestinosViajes(prevState, action3);
        expect(newState.items[1].votes).toEqual(2);

        prevState = newState;
        action3 = new VoteDownAction(prevState.items[0]);
        newState = reducerDestinosViajes(prevState, action3);
        expect(newState.items[0].votes).toEqual(-1);

    });



});
