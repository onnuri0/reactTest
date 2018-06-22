
import React, { Component } from 'react';
import PhoneInfo from './PhoneInfo';

class PhoneInfoList extends Component {
    static defaultProps = {
        data: [
            {   
                id:'0',
                name: 'ex-name',
                phone: 'ex-phone'
            }
        ],
        onRemove: () => console.log('onRemove is not undefind'),
    }

    render(){

        const {data,onRemove} = this.props;
        const list = data.map(
            info => (<PhoneInfo 
                        key={info.id} 
                        info={info}
                        onRemove={onRemove}/>
                    )
        );

        return (
            <div>{list}</div>
            
        );
    }
}

export default PhoneInfoList;