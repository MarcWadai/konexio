import { Upload, message } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import constants from '../services/config';

function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
}

function beforeUpload(file) {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
        message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
        message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
}

function ImageUpload(props) {
    const [loading, setLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState("");

    const handleChange = info => {
        if (info.file.status === 'uploading') {
            setLoading(true);
            return;
        }
        if (info.file.status === 'done') {
            getBase64(info.file.originFileObj, image => {
                setImageUrl(image)
                props.setImage(info.file.response.location)
                setLoading(false)
            });
        }
    };
    const uploadButton = (
        <div>
            {loading ? <LoadingOutlined /> : <PlusOutlined />}
            <div className="ant-upload-text">Upload</div>
        </div>
    );
    return (
        <Upload
            name="image"
            listType="picture-card"
            className="avatar-uploader"
            showUploadList={false}
            action={`${constants.baseUrl}/v1/upload`}
            beforeUpload={beforeUpload}
            onChange={handleChange}
        >
            {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
        </Upload>
    );
}

export default ImageUpload