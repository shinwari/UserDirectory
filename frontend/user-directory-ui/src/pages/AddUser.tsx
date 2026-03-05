import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import toast from "react-hot-toast"
import { createUser } from "../api/usersApi"

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100, "Name must be at most 100 characters"),
  age: z.coerce.number().int("Age must be an integer").min(0, "Age must be between 0 and 120").max(120, "Age must be between 0 and 120"),
  city: z.string().min(1, "City is required"),
  state: z.string().min(1, "State is required"),
  pinCode: z.string().min(4, "PinCode must be 4–10 chars").max(10, "PinCode must be 4–10 chars"),
})

type FormValues = z.infer<typeof schema>

export default function AddUser() {
  const navigate = useNavigate()
  const [submitting, setSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      age: 0,
      city: "",
      state: "",
      pinCode: "",
    },
  })

  const onSubmit = async (values: FormValues) => {
    setSubmitting(true)
    try {
      await createUser(values)
      toast.success("User created successfully")
      navigate("/users")
    } catch (e: any) {
      toast.error(e?.message ?? "Failed to create user")
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div style={{ maxWidth: 520 }}>
      <h2 style={{ marginTop: 0 }}>Add User</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Field label="Name" error={errors.name?.message}>
          <input style={input} {...register("name")} />
        </Field>

        <Field label="Age" error={errors.age?.message}>
          <input style={input} type="number" {...register("age")} />
        </Field>

        <Field label="City" error={errors.city?.message}>
          <input style={input} {...register("city")} />
        </Field>

        <Field label="State" error={errors.state?.message}>
          <input style={input} {...register("state")} />
        </Field>

        <Field label="PinCode" error={errors.pinCode?.message}>
          <input style={input} {...register("pinCode")} />
        </Field>

        <button type="submit" disabled={submitting} style={button}>
          {submitting ? "Saving..." : "Create"}
        </button>
      </form>
    </div>
  )
}

function Field({
  label,
  error,
  children,
}: {
  label: string
  error?: string
  children: React.ReactNode
}) {
  return (
    <div style={{ marginBottom: 14 }}>
      <label style={{ display: "block", fontWeight: 600, marginBottom: 6 }}>{label}</label>
      {children}
      {error && <div style={{ marginTop: 6, color: "crimson" }}>{error}</div>}
    </div>
  )
}

const input: React.CSSProperties = {
  width: "100%",
  padding: "10px 12px",
  border: "1px solid #ddd",
  borderRadius: 6,
  boxSizing: "border-box",
}

const button: React.CSSProperties = {
  padding: "10px 14px",
  borderRadius: 6,
  border: "none",
  cursor: "pointer",
}