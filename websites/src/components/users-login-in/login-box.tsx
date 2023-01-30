import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import React from 'react';
import axios from 'axios';
// import  {useNavigate} from 'react-router-dom';
import styles from './styles.module.css';
import { useStore } from '../../stores';
import { observer } from 'mobx-react-lite';


const LoginBox = () => {
    const {loginStore} = useStore()
    // const navigate = useNavigate();
    const onFinish =  async(values: any) => {


        await loginStore.getToken({
            username: values.username,
            password: values.password,

        }).then(()=>{
            console.log(loginStore.token)
        }).catch((error) => {
            alert("Please check your username or password!")
        })
        
    }
    
    const onFinishFailed = (errorInfo:any)=>{
        console.log(errorInfo)
    }



    return (
        <>
            <div className={`${styles.loginBox}`}>
                <Form
                    name="normal_login"
                    className="login-form  "
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed = {onFinishFailed}
                    style={{ display: 'grid', width: '18rem', height: '15rem' }}

                >
                    <Form.Item
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Username!',
                            },
                            {
                                pattern: /^\w{3,20}$/,
                                message: 'Please input more than 3-20 numbers without special characters ',
                                validateTrigger: 'onBlur',
                            },

                        ]}
                        style={{ justifyContent: "center" }}
                    >
                        <Input
                            prefix={<UserOutlined className="site-form-item-icon " style={{ marginLeft: '1rem' }} />}

                            placeholder="Username"
                        />

                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Password!',
                            },
                        ]}
                        style={{ justifyContent: "center" }}
                    >
                        <Input
                            prefix={<LockOutlined className="site-form-item-icon " style={{ marginLeft: '1rem' }} />}
                            type="password"
                            placeholder="Password"
                        // bordered={false}
                        />
                    </Form.Item>
                    <Form.Item>
                        <Form.Item name="remember" valuePropName="checked" noStyle>
                            <Checkbox>
                                <span style={{ marginLeft: '1rem' }}>Remember me</span>
                            </Checkbox>
                        </Form.Item>


                    </Form.Item>

                    <Form.Item>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>

                            <Button type="primary" htmlType="submit" className="w-[5rem] h-[2.5rem] rounded-[0.5rem] bg-[#dd7338]">
                                Login in
                            </Button>
                            <Button href='/users/register' className="w-[5rem] h-[2.5rem] rounded-[0.5rem] bg-[#dd7338]">
                                Register
                            </Button>
                        </div>
                        <div className='mt-[0.5rem] text-white' style={{marginTop:"1rem"}}>
                            <a className="login-form-forgot  mt-[1rem]" href="">
                                Forgot password
                            </a>
                            <a className="block mt-[0.5rem] pl-[2rem]" href="" style={{marginLeft:"4rem"}}>
                                Register now!
                            </a>
                        </div>

                    </Form.Item>
                </Form>
            </div>
        </>

    );
};

export default LoginBox;

