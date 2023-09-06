
import LeftSide from "../LeftSide/LeftSide";
import RightSide from "../RightSide/RightSide";


const MacMenu = (props:{windowWidth: number}) => {

    const shouldRender = () => {
        return props.windowWidth > 768;
    }
    
    if (shouldRender()){
        return(
            <div className="inline-flex rounded-[8px] overflow-hidden w-full" style={{
                boxShadow: '0px 4px 16px 0px rgb(0 0 0 / 0.25)',
                transition: 'box-shadow 0.3s ease'
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = '0px 8px 24px 0px rgba(0, 0, 0, 0.5)';
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = '0px 4px 16px 0px rgba(0, 0, 0, 0.25)';
                }}>
                <LeftSide />
                <RightSide />
            </div>
        )
    } else {
        return(
            <div className="inline-flex rounded-[8px] overflow-hidden w-fit" style={{
                boxShadow: '0px 4px 16px 0px rgb(0 0 0 / 0.25)',
                transition: 'box-shadow 0.3s ease'
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = '0px 8px 24px 0px rgba(0, 0, 0, 0.5)';
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = '0px 4px 16px 0px rgba(0, 0, 0, 0.25)';
                }}>
                <LeftSide />
            </div>
        )
    }
}

export default MacMenu;