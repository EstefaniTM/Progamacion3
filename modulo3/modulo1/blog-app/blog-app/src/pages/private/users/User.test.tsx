import { render, screen, fireEvent, waitFor, within } from "@testing-library/react";
import Users from "./Users";
import axios from "axios";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("Users page", () => {
  const users = [
    { id: "1", username: "user1", email: "user1@mail.com", password: "" },
    { id: "2", username: "user2", email: "user2@mail.com", password: "" },
  ];

  beforeEach(() => {
    mockedAxios.get.mockResolvedValue({ data: { data: { items: users } } });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("muestra la lista de usuarios", async () => {
    render(<Users />);
    await waitFor(() => {
      expect(screen.getByText("Usuarios")).toBeInTheDocument();
      expect(screen.getByText("user1")).toBeInTheDocument();
      expect(screen.getByText("user2")).toBeInTheDocument();
    });
  });

  it("filtra usuarios por nombre", async () => {
    render(<Users />);
    await waitFor(() => screen.getByText("user1"));
    fireEvent.change(screen.getByPlaceholderText("Buscar..."), { target: { value: "user2" } });
    expect(screen.queryByText("user1")).not.toBeInTheDocument();
    expect(screen.getByText("user2")).toBeInTheDocument();
  });

  it("abre el diálogo para nuevo usuario", async () => {
    render(<Users />);
    await waitFor(() => screen.getByText("Usuarios"));
    fireEvent.click(screen.getByText("Nuevo usuario"));
    const dialog = await screen.findByRole('dialog');
    expect(within(dialog).getByLabelText(/username/i)).toBeInTheDocument();
  });
});