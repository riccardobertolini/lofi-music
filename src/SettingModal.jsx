import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';


const Container = styled.div`
  .gear-icon {
    height: 50px;
    width: 50px;
    cursor: pointer;
    color: #fff;
    position: absolute;
    top: 20px;
    right: 20px;
  }

  @media (max-width: 768px) {
    .gear-icon {
      height: 35px;
      width: 35px;
      top: 10px;
      right: 20px;
    }
  }
`;

const ModalWrapper = styled.div`
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  position: relative;
  width: 40rem;
  height: 10rem;
  background-color: #fff;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 5px;

  .aboutus {
    font-size: 1.2rem;
    font-weight: 600;
  }

  @media (max-width: 768px) {
    width: 80%;
  }
`;

const CloseButton = styled.span`
  position: absolute;
  top: 16px;
  right: 13px;
  cursor: pointer;
  width: 40px;
  color: #fff;
  height: 40px;
  border-radius: 50%;
  background-image: linear-gradient(-225deg, #ff1361 67%, #fff800 100%);

  @media (max-width: 768px) {
    top: 10px;
    right: 8px;
    width: 30px;
    height: 30px;
  }
`;
const SettingModal = () => {
	const ModalRef = useRef();
	const [isOpen, setIsOpen] = useState(false);

	const openModal = () => {
		setIsOpen(true);
	};

	const closeModal = () => {
		setIsOpen(false);
	};

	const outsideClick = (e) => {
		if (ModalRef.current === e.target) {
			setIsOpen(false);
		}
	};

	useEffect(() => {
		document.addEventListener('mousedown', outsideClick);
		return () => {
			document.removeEventListener('mousedown', outsideClick);
		};
	}, []);

	return (
		<Container>
			<svg
				onClick={openModal}
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				class="gear-icon"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z"
				/>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
				/>
			</svg>

			{isOpen && (
				<ModalWrapper ref={ModalRef}>
					<ModalContent>
						<CloseButton onClick={closeModal}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="w-6 h-6"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M6 18L18 6M6 6l12 12"
								/>
							</svg>
						</CloseButton>
            <div className='aboutus'>
						<a href="https://www.github.com/riccardobertolini">
							👨‍💻 by Riccardo Bertolini with 💖
						</a>{' '}
						<br />
						using React18, TypeScript & Vite
            </div>
					</ModalContent>
				</ModalWrapper>
			)}
		</Container>
	);
};

export default SettingModal;
