import styled from 'styled-components';

export const Item = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 30px;
    margin-right: 30px;
`;

export const Top = styled.div`
    position: relative;
    width: 100%;
    height: 214px;
    
`;

export const Logo = styled.div`
    position: absolute;
    top: 20px;
    left: 20px;
    width: 76px;
    height: 22px;
`;

export const ImgQuest = styled.img`
    position: absolute;
    top: 28px;
    left: 36px;
    width: 308px;
    height: 168px;
`;

export const UserCard = styled.div`
display: flex;
flex-wrap: wrap;
width: 380px;
height: 460px;
justify-content: center;
background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
);
box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
border-radius: 20px;
`;

export const Avatar = styled.div`
    position: relative;
    width: 100%;
    height: 8px;
    background: #ebd8ff;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
        inset 0px -1.71846px 3.43693px #ae7be3,
        inset 0px 3.43693px 2.5777px #fbf8ff;
`;

export const Ellipse = styled.img`
    position: absolute;
    top: 0px;
    left: 0px;
    width: 80px;
    height: 80px;
`;
export const AvatarImg = styled.div`
position: absolute;
top: -36px;
left: 150px;
width: 80px;
height: 80px;
padding: 8px;
border-radius: 50%;
`;

export const UserAva = styled.img`
    width: 62px;
    height: 62px;
    border-radius: 50%;
`;

export const TweetsInfo = styled.div`
    width: 100%;
    height: 238px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-bottom: 36px;
`;

export const UserTweets = styled.p`
    margin: 0px auto 16px auto;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    text-transform: uppercase;
    font-size: 20px;
    line-height: 1.2;
    color: #ebd8ff;
`;

export const BtnFollow = styled.button`
    margin-top: 10px;
    width: 196px;
    height: 50px;
    background-color: #ebd8ff;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
    border-radius: 10.3108px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 14px 28px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 1.22%;
    text-transform: uppercase;
`;

export const BtnFollower = styled(BtnFollow)`
    background-color: #5cd3a8;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
`;