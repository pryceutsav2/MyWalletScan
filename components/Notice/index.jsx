import {Modal} from "antd";
import {useEffect, useState} from "react";

const Notice = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    useEffect(() => {
        setModalIsOpen(true);
    }, []);
    return (
        <div>
            <Modal
                title="注意事项(2023-05-17)"
                open={modalIsOpen}
                onOk={() => setModalIsOpen(false)}
                onCancel={() => setModalIsOpen(false)}
                style={{fontFamily: 'Arial, sans-serif', top: 20}}
                okText={"知道了"}
            >
         
                <p style={{
                    color: '#666',
                    marginBottom: '10px'
                }}>开发这款工具的初衷是为了方便大家查看自己的钱包信息，一直秉持着免费开源的原则，希望大家喜欢。</p>
                
                    </li>
                </ul>
             
                </p>
            </Modal>
        </div>
    )
}
export default Notice;
