import React from "react";
import "./LoaderLogo.css";

class LogoLoader extends React.Component {
  render() {
    const theme = this.props.theme;
    return (
      <svg
        className="raw_logo"
        width="50%"
        height="40%"
        viewBox="0 0 440 305"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          class="myHexagon"
          d="M293.545 167.405L229.5 204.381C227.025 205.81 223.975 205.81 221.5 204.381L157.455 167.405C154.98 165.976 153.455 163.335 153.455 160.476L153.455 86.5234C153.455 83.6653 154.98 81.0243 157.455 79.5952L221.5 42.6187C223.975 41.1896 227.025 41.1897 229.5 42.6187L293.545 79.5952C296.02 81.0243 297.545 83.6653 297.545 86.5234L297.545 160.476C297.545 163.335 296.02 165.976 293.545 167.405Z"
          stroke={theme.body}
          stroke-width="4"
        />
        <path
          class="myHexagon"
          d="M147.455 73.5953L211.5 36.6188C213.975 35.1898 217.025 35.1898 219.5 36.6188L283.545 73.5953C286.02 75.0244 287.545 77.6654 287.545 80.5235L287.545 154.477C287.545 157.335 286.02 159.976 283.545 161.405L219.5 198.381C217.025 199.81 213.975 199.81 211.5 198.381L147.455 161.405C144.98 159.976 143.455 157.335 143.455 154.477L143.455 80.5235C143.455 77.6654 144.98 75.0244 147.455 73.5953Z"
          stroke={theme.body}
          stroke-width="4"
        />
        <path
          class="letter"
          d="M 215 124 V 132 H 195 V 124 H 201 L 183 105 H 183 L 183 124 H 189 V 132 H 169 V 124 H 175 L 175 93 H 169 V 85 H 189 V 93 H 183 L 201 112 L 201 93 L 195 93 L 195 85 L 195 85 H 215 L 215 93 L 209 93 L 209 124 Z Z Z M 254 108 L 262 116 L 262 124 L 254 124 L 254 116 L 231 116 L 231 132 L 254 132 L 262 140 L 262 156 L 254 164 L 231 164 L 223 156 L 223 148 L 231 148 L 231 156 L 254 156 L 254 140 L 231 140 L 223 132 L 223 116 L 231 108 L 254 108"
          stroke={theme.body}
          stroke-width="3"
        />
        <defs>
          <style
            dangerouslySetInnerHTML={{
              __html: `
              
		.signature{
			stroke-dasharray: 800;
			stroke-dashoffset: 800;
			-webkit-animation: dash 6s linear forwards 0.5s;
			-o-animation: dash 6s linear forwards 0.5s;
			-moz-animation: dash 6s linear forwards 0.5s;
			animation: dash 6s linear forwards 0.5s;
		}

		.letter{
			opacity: 0;
			-webkit-animation: fadein 2s linear forwards 2.5s;
			-o-animation: fadein 2s linear forwards 2.5s;
			-moz-animation: fadein 2s linear forwards 2.5s;
			animation: fadein 2s linear forwards 2.5s;
		}

		@-webkit-keyframes fadein{
			from{
				opacity: 0;
			}
			to{
				opacity: 1;
			}
		}

      .myHexagon{
			stroke-dasharray: 800;
			stroke-dashoffset: 800;
			-webkit-animation: dash 4s linear forwards 0.5s;
			-o-animation: dash 4s linear forwards 0.5s;
			-moz-animation: dash 4s linear forwards 0.5s;
			animation: dash 4s linear forwards 0.5s;
		}

		@-webkit-keyframes dash{
			from{
				stroke-dashoffset: 800;
			}
			to{
				stroke-dashoffset: 0;
			}
		}
    `,
            }}
          />
        </defs>
      </svg>
    );
  }
}

export default LogoLoader;
