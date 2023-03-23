import { useState, useEffect } from 'react';
import {useLocalStorage} from '../Hooks/useLocalStorage'

import {
    Item,
    UserCard,
    Top,
    Logo,
    ImgQuest,
    Avatar,
    AvatarImg,
    Ellipse,
    UserAva,  
    TweetsInfo,    
    UserTweets,    
    BtnFollow,
    BtnFollower,
} from './UserItem.style';

import logo from '../Images/Logo.png';
import bkgTop from '../Images/picture21.png';
import Ring from '../Images/Ellipse.png';

export const UserItem = ({ user }) => {
    const { id, user_name, tweets, followers, avatar } = user;
    console.log(avatar);

    const follower = `isFollowers${id}`;
    const getFollowers = window.localStorage.getItem(follower);
    
    const [isFollowers, setIsFollowers] = useState(() => {
        return JSON.parse(getFollowers) ?? followers;
    });

    const followBtn = `disabled${id}`;
    const getFollowBtn = window.localStorage.getItem(followBtn);  

    const [disabled, setDisabledStorage] = useLocalStorage(() => {
        return JSON.parse(getFollowBtn) ?? true;
    });
    
    const clickBtn = () => {
        if (disabled) {
            setDisabledStorage(!disabled);
            setIsFollowers(prevState => prevState + 1);
        } else {
            setDisabledStorage(!disabled);
            setIsFollowers(prevState => prevState - 1);
        }
    };

    useEffect(() => {
        window.localStorage.setItem(follower, JSON.stringify(isFollowers));
        window.localStorage.setItem(followBtn, JSON.stringify(disabled));
    }, [isFollowers, follower, disabled, followBtn]);


    return (
        <Item>
            <UserCard>
                <Top>
                    <Logo>
                        <img src={logo} alt="GoIT" />
                    </Logo>
                    <ImgQuest src={bkgTop} alt="massage" />
                </Top>
                <Avatar>
                    <AvatarImg>
                        <Ellipse src={Ring} alt=""></Ellipse>
                        <UserAva src={avatar} alt={user_name} />
                    </AvatarImg>
                </Avatar>
                <TweetsInfo>
                    <UserTweets>{tweets} Tweets</UserTweets>
                    <UserTweets>{isFollowers} Followers</UserTweets>
                    {disabled ? (
                                <BtnFollow
                                    type="button"
                                    onClick={() => clickBtn({ isFollowers })}
                                >
                                    Follow
                                </BtnFollow>
                            ) : (
                                <BtnFollower
                                    type="button"
                                    onClick={() => clickBtn({ isFollowers })}
                                >
                                    Following
                                </BtnFollower>
                            )}
                </TweetsInfo>
            </UserCard>
        </Item>
    );
};