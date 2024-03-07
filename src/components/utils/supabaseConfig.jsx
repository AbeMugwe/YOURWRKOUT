import { createClient } from "@supabase/supabase-js/"

const supaBaseUrl = 'https://mxmnctornonlycrsgzhi.supabase.co'
const supaBaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im14bW5jdG9ybm9ubHljcnNnemhpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk1MzcyNDUsImV4cCI6MjAyNTExMzI0NX0.dO98iJKT0YlcUp9ocNbfvddr5TIUhAKFCOdU9iEPRf8'

export const supabase = createClient(supaBaseUrl, supaBaseAnonKey)