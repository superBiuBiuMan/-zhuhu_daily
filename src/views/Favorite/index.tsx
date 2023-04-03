import {Checkbox, Dialog, ErrorBlock, NavBar, Toast} from "antd-mobile";
import React, {useEffect, useMemo, useState} from "react";
import {RouterBasicProps} from "@/router/types";
import "./index.less";
import {useDispatch, useSelector} from "react-redux";
import {fetchUserCollectionAction} from "@/store/slice/base/actions";
import {SwipeAction,Image} from "antd-mobile";
import NewsItem from "@/modules/Home/DayContent/component/NewsItem";
import {transformList} from "./types";
import {Action} from "antd-mobile/es/components/swipe-action/swipe-action";
import api from "@/api";
import {useNavigate} from "react-router-dom";
const Favorite:React.FC<RouterBasicProps> = (props) => {
  const navigate = useNavigate();
  const collectionList = useSelector((state:any) => transformList(state.base?.favorite));//收藏夹列表
  const [isRememberDelete,setIsRememberDelete] = useState<unknown>(() => {
      const result  = localStorage.getItem('rememberInfo');
      return result === '1';
  })
  const dispatch = useDispatch();
  useEffect(() => {
      if(!collectionList || collectionList?.length === 0){
          //不存在列表,发送请求查询
          dispatch(fetchUserCollectionAction() as any);
      }
  },[])
  /* 不再提示 */
  const handleAlwaysConfirm = (val:boolean) => {
      localStorage.setItem('rememberInfo',val ? '1' : '0');
      setIsRememberDelete(val);
  }
  /* 确认删除 */
  const handleDelete = async (id:number) => {
      const result = isRememberDelete ? true: (
          await Dialog.confirm({
              content:(
                  <div className='zhihu-favorite-dialog'>
                      <span className='zhihu-favorite-dialog_title'>确定删除吗?</span>
                      <Checkbox className='zhihu-favorite-dialog_box' onChange={handleAlwaysConfirm}>不再提示</Checkbox>
                  </div>
              )
          })
      )
      //当用户选择了确认删除或者是记住了删除密码,则执行删除
      if(result){
          const {code} = await api.reqRemoveCollection(id).catch(() => ({}))
          if(+code !==0){
              Toast.show({
                  icon:'fail',
                  content:'移除失败'
              })
          }else{
              //重新渲染
              dispatch(fetchUserCollectionAction() as any)
          }
      }
  }
  return (
      <div className='zhihu-favorite'>
          <NavBar className='zhihu-favorite_bar'  onBack={() => props.navigate(-1)}>收藏夹</NavBar>
          {
              collectionList && collectionList?.length > 0 ? (
                  <div className="zhihu-favorite_list">
                      {
                          collectionList?.map((item:any) =>{
                              const { itemId } = item;
                              const actions:Action[] = [
                                  {
                                      key: 'delete',
                                      text: '删除',
                                      color: 'danger',
                                      onClick: handleDelete.bind(null,itemId)
                                  },
                              ]
                              return (
                                  <SwipeAction key={item.id} rightActions={actions}>
                                      <NewsItem  {...item}/>
                                  </SwipeAction>
                              )
                          })
                      }
                  </div>
              )
                  : <ErrorBlock status='empty' description={<span style={{color:'#1677ff'}} onClick={() => navigate({pathname:'/'})}>快去阅读文章并收藏吧</span>}/>
          }
      </div>
  );
};


export default Favorite;
