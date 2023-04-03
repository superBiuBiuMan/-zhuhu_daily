import {Button, ImageUploadItem, NavBar} from "antd-mobile";
import {RouterBasicProps} from "@/router/types";
import "./index.less";
import { Input,ImageUploader,Toast } from "antd-mobile";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {LimitSize} from "./types";
import api from "@/api";
import {fetchUserDataAction} from "@/store/slice/base/actions";
const Update:React.FC<RouterBasicProps> = (props) => {
    const dispatch = useDispatch()
    const userInfo = useSelector((state:any) => state.base?.info ?? {});//用户信息
    //文件列表
    const [fileList, setFileList] = useState<ImageUploadItem[]>([{url: userInfo?.pic,},])
    //用户名称
    const [userName,setUserName] = useState<string>(userInfo?.name ?? '');

    /* 文件上传前校验 */
    const handleBeforeUpload = (file:File) => {
        const { size,type } = file;//获取文件大小,单位为Kb注意,是Kb,而不是KB  转换关系: 1024Kb = 1KB   1024KB = 1MB
        if(size > LimitSize){
            Toast.show({
                icon:'fail',
                content:`不得大于${Math.ceil(LimitSize/1024/1024)}MB`
            })
            return Promise.reject();
        }
        if(!type.startsWith('image/')){
            Toast.show({
                icon:'fail',
                content:'请选择图片文件上传'
            })
            return Promise.reject();
        }
        return Promise.resolve(file);
    }
    /* 文件上传 */
    const handleUpload = async (file:File) => {
        const {code,pic} = await api.upload(file).catch(() => ({}))
        if(+code !==0){
            Toast.show({
                icon:'fail',
                content:'文件上传失败'
            })
            throw new Error('上传失败，请重新上传')
        }
        setFileList([{
            url:pic,
        }])
        return {url:pic}
    }
    /* 删除文件 */
    const handleDeletePic = () => {
        setFileList([])
    }
    /* 更新姓名 */
    const updateUserName = (val:string) => {
        setUserName(val);
    }
    /* 点击提交 */
    const handleSubmit = async () => {
        if(!fileList.length) {
            Toast.show({
                icon:'fail',
                content:'请先上传头像'
            })
            return;
        }
        if(!userName || !userName?.trim()){
            Toast.show({
                icon:'fail',
                content:'请输入姓名'
            })
            return;
        }
        //发送请求
        const { code } = await api.reqChangeData({
            username:userName,
            pic:fileList?.[0]?.url ?? '',
        }).catch(() => ({}))
        if(+code !==0){
            Toast.show({
                icon:'fail',
                content:'修改信息失败'
            })
        }else{
            props.navigate(-1);
            //更新redux数据
            dispatch(fetchUserDataAction() as any);
            Toast.show({
                icon:'success',
                content:'更新信息成功'
            });
        }

    }
   return (
      <div className='zhihu-update'>
          <NavBar className='zhihu-update_bar' onBack={() => props.navigate(-1)}>修改信息</NavBar>
          <div className="zhihu-update_form">
              <div className="zhihu-update_form_item">
                  <div className="zhihu-update_form_item_title">头像</div>
                  <div className="zhihu-update_form_item_com">
                      <ImageUploader
                          className='zhihu-update_form_item_com_upload'
                          maxCount={1}
                          value={fileList}
                          showFailed={false}
                          beforeUpload={handleBeforeUpload}
                          upload={handleUpload}
                          onDelete={handleDeletePic}
                      />
                  </div>
              </div>
              <div className="zhihu-update_form_item">
                  <div className="zhihu-update_form_item_title">姓名</div>
                  <div className="zhihu-update_form_item_com">
                      <Input className='zhihu-update_form_item_com_input' value={userName} onChange={updateUserName}/>
                  </div>
              </div>
              <div className="zhihu-update_form_submit">
                  <Button  onClick={handleSubmit} className='zhihu-update_form_submit_btn' color='primary'>提交</Button>
              </div>
          </div>
      </div>
   );
};


export default Update;
