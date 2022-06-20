import styled from "styled-components";
import { ValueTextTheme } from "./interface";

export const CalculatorContainer = styled.div`
  max-width: 58rem;
  margin: 2rem auto;
  padding: 1.6rem;
  border-radius: 10px;
  box-shadow: 0 4px 20px -4px rgba(106, 110, 114, 0.32);
`;

export const Form = styled.form`
  margin-top: 2.2rem;
`;

export const SectionItem = styled.li`
  margin-bottom: 4rem;
`;

export const SectionRightLine = styled.div`
  text-align: right;
  margin-bottom: 6px;
`;

export const SectionTitle = styled.h2`
  padding-bottom: 6px;
  border-bottom: 2px solid #151515;
  margin-bottom: 6px;
`;

export const Label = styled.span`
  font-size: 1.3rem;
  color: ${({ theme }) => theme.colors.inactiveGray};
`;

export const SectionInputLine = styled.div`
  display: flex;
  align-items: center;
  margin: 1.2rem 0;
`;

export const LabelBlock = styled.div`
  display: block;
  margin-bottom: 5px;
  font-size: 1.3rem;
  color: ${({ theme }) => theme.colors.inactiveGray};
`;

export const InputLabel = styled.label`
  display: block;
  width: 15rem;
  line-height: 1.4;
  font-size: 1.5rem;
`;

export const InputValue = styled.input`
  display: block;
  padding: 1rem;
  flex: 1 0 0;
  background: ${({ theme }) => theme.colors.inputGray};
  border-radius: 4px;
  line-height: 1.4;
  text-align: right;
  font-size: ${({ theme }) => theme.fontSize.input.small};
`;

export const Refresh = styled.button`
  float: right;
  display: block;
  width: 18px;
  height: 18px;
  text-indent: -9999px;
  background: url("/images/icon-refresh.png") no-repeat center;
  background-size: contain;
`;

export const ValueText = styled.span<{ isActive: boolean; textTheme: ValueTextTheme }>`
  display: inline-block;
  margin-left: 8px;
  color: ${({ isActive, theme }) => (isActive ? theme.colors.activeBlack : theme.colors.inactiveGray)};
  font-size: ${({ theme, textTheme }) => theme.fontSize.input[textTheme]};
  font-weight: 600;
`;