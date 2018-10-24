import * as React from 'react';
import './Hello.css';

export interface Props {
    name: string,
    enthusiasmLevel?: number 
};

interface State {
    currentEnthusiasm: number
}

class Hello extends React.Component<Props, State> {
    count: number
    constructor(props: Props) {
        super(props);
        this.state = {
            currentEnthusiasm: props.enthusiasmLevel || 0
        }
        this.count = 0;
    }

    // componentDidUpdate() {
    //     // Если использовать этот метод для проверки на отрицательность значения
    //     // currentEnthusiasm, то, так как метод не сработает до первого рендера,
    //     // при отрицательном значении будет ошибка. 
    //     // Самое важное, если всё отрисовалось, начать уменьшать по кнопке
    //     // значение currentEnthusiasm, при значениях, меньших ноля (это только -1)
    //     // будет происходить в подряд два перерендеривания 
    //     console.log('___ blablabla')
    //     if (this.state.currentEnthusiasm < 0) {
    //         this.setState({currentEnthusiasm: 0})
    //     }
    // }

    static getDerivedStateFromProps(props: Props, state: State) {
        // console.log('___ getDerivedStateFromProps method is invoked')
        // Этот метод вызывается всегда при перерендеревании и при получении навых
        // аргументов от родительского компонента. В некотором роде, это некий "componentWillRender" 

        if (state.currentEnthusiasm < 0) {
            return { currentEnthusiasm: 0 }
        } else {
            return state
        }

        // Метод использован здесь затем, чтобы при получении отрицательного enthusiasmLevel
        // перезаписать его равным нулю без дополнительного перерендеревания, которое 
        // произошло бы при вызове setState из других методов жизненнго цикла.
    }

    onIncrement = () => {
        this.setState({ currentEnthusiasm: this.state.currentEnthusiasm + 1 })
    }

    onDecrement = () => {
        // Проверка не нужна, так как есть getDerivedStateFromProps
        // if (this.state.currentEnthusiasm == 0) {
        //     return
        // }  
        this.setState({ currentEnthusiasm: this.state.currentEnthusiasm - 1 })
    }

    render() {
        this.count += 1;
        return (
            <div className='hello'>
                <div className='greeting'>
                    Hello, { this.props.name + Array(this.state.currentEnthusiasm + 1).join('!') }
                </div>
                <button onClick={this.onIncrement}>Прибавить</button>
                <button onClick={this.onDecrement}>Убавить</button>
                <div className='renderCount'>Количество отрисовок {this.count}</div>
            </div>
        )
    }

}


export default Hello;