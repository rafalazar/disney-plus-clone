import styled from 'styled-components';

const Detail = () => {
    return (
        <Container>
            <Background>
                <img src="https://i0.wp.com/virtualgamer.es/wp-content/uploads/2021/05/eternals-marvel-disney-trailer-portada.jpg?fit=1892%2C1065&ssl=1" alt="wallpaper" />
            </Background>

            <ImgTitle>
                <img src="https://terrigen-cdn-dev.marvel.com/content/prod/1x/eternals_lob_log_def_03.png" alt="logo" />
            </ImgTitle>

            <ContentMeta>
                <Controls>
                    <Player>
                        <img src="https://i.ibb.co/hCWjw0R/play-icon-black.png" alt="play-icon-black" />
                        <span>Play</span>
                    </Player>

                    <Trailer>
                        <img src="https://i.ibb.co/f9gyJQf/play-icon-white.png" alt="trailer-icon-white" />
                        <span>Trailer</span>
                    </Trailer>
                </Controls>
            </ContentMeta>
        </Container>
    );
}

const Container = styled.div`
    position: relative;
    min-height: calc(100vh - 250px);
    overflow-x: hidden;
    display: block;
    top: 72px;
    padding: 0 calc(3.5vw + 5px);
`;

const Background = styled.div`
    left: 0px;
    opacity: 0.8;
    position: fixed;
    right: 0px;
    top: 0px;
    z-index: -1;

    img {
        width: 100vw;
        height: 100vh;

        @media (max-width: 768px) {
            width: initial;
        }
    }
`;

const ImgTitle = styled.div`
    display: flex;
    align-items: flex-end;
    -webkit-box-pack: start;
    justify-content: flex-start;
    margin: 0px auto;
    height: 30vh;
    min-height: 170px;
    padding-bottom: 24px;
    width: 100%;

    img {
        max-width: 600px;
        min-width: 200px;
        width: 35vw;
    }
`;

const ContentMeta = styled.div`
    max-width: 874px;
`;

const Controls = styled.div`
    display: flex;
    align-items: center;
    flex-flow: row nowrap;
    margin: 24px 0px;
    min-height: 56px;
`;

const Player = styled.button`
    display: flex;
    font-size: 15px;
    margin: 0px 22px 0px 0px;
    padding: 0px 24px;
    height: 56px;
    border-radius: 4px;
    align-items: center;
    cursor: pointer;
    justify-content: center;
    letter-spacing: 1.8px;
    text-align: center;
    text-transform: uppercase;
    background: rgb(249, 249, 249);
    border: none;
    color: rgb(0, 0, 0);

    img {
        width: 32px;
    }

    &:hover {
        background: rgb(198, 198, 198);
    }

    @media (max-width: 768px) {
        height: 45px;
        padding: 0px 12px;
        font-size: 12px;
        margin: 0px 10px 0px 0px;

        img {
            width: 25px;
        }
    }
`;

const Trailer = styled(Player)`
    background: rgba(0, 0, 0, 0.3);
    border: 1px solid rgb(249, 249, 249);
    color: rgb(249, 249, 249);
`;

export default Detail;